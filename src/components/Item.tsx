
export interface ItemProps {
  name?: string;
  image?: string;
  price?: number;
  subtitle?: string;
}

export const initialProps: ItemProps = {
  name: "Product Name",
  price: 0,
  subtitle: "Product Subtitle",
  image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'
};

const Item = ({ name, image, price, subtitle }: ItemProps) => {
  console.log(subtitle)
  return (
    <li className="relative flex flex-col p-4">
      <div className="flex-1">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-48 mx-auto text-gray-300 rounded-md"
        />
        <h3 className="mt-4 text-sm font-medium text-gray-900">
          <a href="#">
            <span className="absolute inset-0" />
            {name}
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
      </div>
    </li>
  );
};

export default Item;
