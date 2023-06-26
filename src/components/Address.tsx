import { Address } from "../types/Address";

export interface AddressComponentProps {
    address: Address;
}


const AddressComponent = ({ address }: AddressComponentProps) => {
    const { line1, city, region, postalCode, countryCode } = address;

    return (
        <>
            <div className="address">
                <p className="line1">{line1}</p>
                <p className="city">{city}</p>
                <p className="region">{region}</p>
                <p className="postal-code">{postalCode}</p>
                <p className="country-code">{countryCode}</p>
            </div>
        </>
    );
};

export default AddressComponent;

const styles = `
  .address {
    color: black;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .address p {
    margin: 5px 0;
  }

  .address .line1 {
    font-size: 18px;
    font-weight: bold;
  }

  .address .city,
  .address .region {
    font-size: 16px;
  }

  .address .postal-code,
  .address .country-code {
    font-size: 14px;
  }
`;

// Create a <style> tag and append the CSS styles
const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);