import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "@/utils/prisma";

export const serverRouter = trpc
  .router()
  .query("findTodos", {
    resolve: async () => {
      return await prisma.todo.findMany();
    },
  })
  .mutation("insertTodo", {
    input: z.object({
      text: z.string(),
      isCompleted: z.boolean(),
    }),
    resolve: async ({ input }) => {
      return await prisma.todo.create({
        data: { ...input },
      });
    },
  })
  .mutation("updateTodo", {
    input: z.object({
      id: z.number(),
      text: z.string(),
      isCompleted: z.boolean(),
    }),
    resolve: async ({ input }) => {
      const { id, ...rest } = input;

      return await prisma.todo.update({
        where: { id },
        data: { ...rest },
      });
    },
  })
  .mutation("deleteTodo", {
    input: z.object({
      id: z.number(),
    }),
    resolve: async ({ input }) => {
      const { id } = input;

      return await prisma.todo.delete({
        where: { id },
      });
    },
  });

export type ServerRouter = typeof serverRouter;
