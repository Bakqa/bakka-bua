import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Welcome to BakkaBua</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Your one-stop shop for all your needs!</p>
      <div className="mt-6 flex space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Shop Now</button>
        <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Learn More</button>
      </div>
    </div>
  );
}
