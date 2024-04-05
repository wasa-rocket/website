type Props = {
  title: string;
  description: React.ReactNode;
};

export default function BoxText({ title, description }: Props) {
  return (
    <div className="absolute z-50 inset-0 md:m-12 sm:m-8 mx-8 my-12">
      <h3 className="lg:text-7xl sm:text-5xl text-4xl font-semibold lg:mb-6 mb-4">
        {title}
      </h3>
      <p className="sm:text-base text-sm max-w-xs mb-3">{description}</p>
      <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br rounded-full px-4 py-2 text-xs">
        もっと詳しく
      </button>
    </div>
  );
}
