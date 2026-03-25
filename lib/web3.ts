import { ethers } from "ethers";

export const GAME_CONTRACT_ADDRESS =
  process.env.NEXT_PUBLIC_GAME_CONTRACT_ADDRESS ||
  "0x0000000000000000000000000000000000000000";
export const GAME_CONTRACT_ABI = [
  "function hasGamePass(address user) view returns (bool)",
  "function settleScore(address user, uint256 score) external",
  "event ScoreSettled(address indexed user, uint256 score, uint256 timestamp)",
  "event GamePassMinted(address indexed user, uint256 tokenId)",
];

export function getProvider() {
  if (typeof window === "undefined") return null;
  const { ethereum } = window as any;
  if (!ethereum) return null;
  return new ethers.BrowserProvider(ethereum);
}

export async function connectWallet() {
  if (typeof window === "undefined") throw new Error("wallet not available");
  const { ethereum } = window as any;
  if (!ethereum) throw new Error("MetaMask or Web3 wallet required");

  await ethereum.request({ method: "eth_requestAccounts" });
  const provider = getProvider();
  if (!provider) throw new Error("Unable to create provider");
  const signer = await provider.getSigner();
  const address = await signer.getAddress();
  return { provider, signer, address };
}

export async function hasGamePass(address: string): Promise<boolean> {
  const provider = getProvider();
  if (!provider) return false;
  const contract = new ethers.Contract(
    GAME_CONTRACT_ADDRESS,
    GAME_CONTRACT_ABI,
    provider,
  );
  return contract.hasGamePass(address);
}

export async function settleScoreOnChain(address: string, score: number) {
  const provider = getProvider();
  if (!provider) throw new Error("No provider");
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(
    GAME_CONTRACT_ADDRESS,
    GAME_CONTRACT_ABI,
    signer,
  );
  const tx = await contract.settleScore(address, score);
  await tx.wait();
  return tx.hash;
}
