interface PageBannerProps {
  title: string;
  imageUrl: string;
}

export const PageBanner = ({ title, imageUrl }: PageBannerProps) => {
  return (
    <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
      </div>
    </div>
  );
};
