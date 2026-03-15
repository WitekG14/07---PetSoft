import Image from "next/image";

function PetList() {
  return (
    <ul className="bg-white border-b border-black/8">
      <li>
        <button className="flex items-center h-17.5 w-full cursor-pointer px-5 text-base gap-3 hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] transition">
          <Image
            src="https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png"
            alt="Pet image"
            width={45}
            height={45}
            className="rounded-full object-cover"
          />
          <p className="font-semibold">Benjamin</p>
        </button>
      </li>
    </ul>
  );
}

export default PetList;
