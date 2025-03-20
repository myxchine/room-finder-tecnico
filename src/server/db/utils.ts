"use server";
import { db } from "@/server/db";
import { rooms, likes, users } from "@/server/db/schema";
import { desc, sql, eq, and } from "drizzle-orm";
import type { room } from "@/server/db/schema";

export async function getroomById(roomId: string): Promise<room | null> {
  try {
    const res = await db
      .select()
      .from(rooms)
      .where(eq(rooms.id, roomId))
      .limit(1);
    if (!res) throw new Error("No rooms found");
    return res[0];
  } catch (error) {
    console.error("Error getting room by fileUrl:", error);
    return null;
  }
}

export async function getrooms(): Promise<room[]> {
  try {
    const res = await db
      .select()
      .from(rooms)
      .orderBy(desc(rooms.createdAt))
      .limit(60);
    if (!res) throw new Error("No rooms found");
    return res;
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return [];
  }
}

export async function getLikedrooms(userId: string): Promise<room[]> {
  try {
    const res = await db
      .select()
      .from(rooms)
      .where(eq(likes.userId, userId))
      .orderBy(desc(rooms.createdAt))
      .limit(60);
    if (!res) throw new Error("No rooms found");
    return res;
  } catch (error) {
    console.error("Error fetching liked rooms:", error);
    return [];
  }
}
interface LikeStatus {
  likesCount: number;
  isLiked: boolean;
}
export async function getLikeStatus({
  userId,
  roomId,
}: {
  userId?: string;
  roomId: string;
}): Promise<LikeStatus> {
  try {
    const result = await db
      .select({
        likesCount: sql<number>`COUNT(${likes.userId})`.as("likes_count"),
        isLiked: userId
          ? sql<boolean>`BOOL_OR(${likes.userId} = ${userId})`.as("is_liked")
          : sql<boolean>`false`.as("is_liked"),
      })
      .from(likes)
      .where(eq(likes.roomId, roomId));
    const { likesCount, isLiked } = result[0] || {
      likesCount: 0,
      isLiked: false,
    };
    return { likesCount, isLiked };
  } catch (error) {
    console.error("Error fetching like status:", error);
    return { likesCount: 0, isLiked: false };
  }
}

export async function likeroom(userId: string, roomId: string) {
  if (typeof userId !== "string" || typeof roomId !== "string") {
    console.error("Invalid userId or roomId");
    return {
      success: false,
      delta: 0,
      message: "Invalid userId or roomId.",
    };
  }
  try {
    const existingLike = await db
      .select()
      .from(likes)
      .where(and(eq(likes.userId, userId), eq(likes.roomId, roomId)));
    if (existingLike.length > 0) {
      await db
        .delete(likes)
        .where(and(eq(likes.userId, userId), eq(likes.roomId, roomId)));
      return {
        success: true,
        delta: -1,
        message: "Like removed successfully.",
      };
    }
    await db.insert(likes).values({
      userId,
      roomId,
    });
    return { success: true, delta: 1, message: "room liked successfully." };
  } catch (error) {
    console.error("Error toggling like:", error);
    return {
      success: false,
      delta: 0,
      message: "Something went wrong.",
    };
  }
}

export async function getroom(roomId: string): Promise<room | null> {
  try {
    const data = await db
      .select()
      .from(rooms)
      .where(eq(rooms.id, roomId))
      .limit(1);
    if (!data) return null;
    return data[0];
  } catch (error) {
    console.error("Error fetching room:", error);
    return null;
  }
}
import { getServerAuthSession } from "@/server/auth";
export async function newroom({ roomJson }: { roomJson: any }) {
  try {
    const session = await getServerAuthSession();

    const room = await db
      .insert(rooms)
      .values({
        roomJson,
        userId: session?.user.id,
      })
      .returning();
    return {
      room: room[0],
      status: { status: "success", message: "room created successfully." },
    };
  } catch (error) {
    console.error("Error creating new room:", error);
    return {
      room: null,
      status: { status: "error", message: "Failed to create new room." },
    };
  }
}

export async function deleteroom({ room }: { room: room }) {
  try {
    await db.delete(rooms).where(eq(rooms.id, room.id));
    return { status: "success", message: "room deleted successfully." };
  } catch (error) {
    console.error("Error deleting room:", error);
    return { status: "error", message: "Failed to delete room." };
  }
}
