import { Metaplex } from "@metaplex-foundation/js";
import { connection } from "./solana";

export const metaplex = Metaplex.make(connection);
