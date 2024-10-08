/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Watchlist as PrismaWatchlist,
  Movie as PrismaMovie,
  User as PrismaUser,
} from "@prisma/client";

export class WatchlistServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WatchlistCountArgs, "select">
  ): Promise<number> {
    return this.prisma.watchlist.count(args);
  }

  async watchlists(
    args: Prisma.WatchlistFindManyArgs
  ): Promise<PrismaWatchlist[]> {
    return this.prisma.watchlist.findMany(args);
  }
  async watchlist(
    args: Prisma.WatchlistFindUniqueArgs
  ): Promise<PrismaWatchlist | null> {
    return this.prisma.watchlist.findUnique(args);
  }
  async createWatchlist(
    args: Prisma.WatchlistCreateArgs
  ): Promise<PrismaWatchlist> {
    return this.prisma.watchlist.create(args);
  }
  async updateWatchlist(
    args: Prisma.WatchlistUpdateArgs
  ): Promise<PrismaWatchlist> {
    return this.prisma.watchlist.update(args);
  }
  async deleteWatchlist(
    args: Prisma.WatchlistDeleteArgs
  ): Promise<PrismaWatchlist> {
    return this.prisma.watchlist.delete(args);
  }

  async getMovie(parentId: string): Promise<PrismaMovie | null> {
    return this.prisma.watchlist
      .findUnique({
        where: { id: parentId },
      })
      .movie();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.watchlist
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
