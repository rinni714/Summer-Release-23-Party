import Item, { ItemProps } from "./Item";

export interface ItemListProps {
  title?: string;
  backgroundColor?: string;
  items?: Array<ItemProps>
}



const ItemList = ({ title, backgroundColor, items }: ItemListProps) => {
  console.log(items)
  return (
    <div className="p-4">
      <h2 className={`text-lg font-medium text-gray-900 bg-{backgroundColor}`}>{title}</h2>
      <ul
        role="list"
        className="grid grid-cols-4 gap-x-8 border-y border-gray-400"
      >
        {items?.map(({ name, logo, c_subtitle }) => (
          <Item name={name} image={logo?.image?.url} subtitle={c_subtitle}></Item>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
