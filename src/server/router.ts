import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "@/utils/prisma";

export const serverRouter = trpc
  .router()
  .query("findMemes", {
    resolve: async () => {
      return await prisma.meme.findMany();
    },
  })
  .mutation("insertMeme", {
    input: z.object({
      link: z.string(),
    }),
    resolve: async ({ input }) => {
      return await prisma.meme.create({
        data: { ...input },
      });
    },
  })
  .mutation("deleteMeme", {
    input: z.object({
      id: z.number(),
    }),
    resolve: async ({ input }) => {
      const { id } = input;

      return await prisma.meme.delete({
        where: { id },
      });
    },
  });

export type ServerRouter = typeof serverRouter;
