import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Gallery from "../Gallery";

Enzyme.configure({ adapter: new Adapter() });

describe("<Gallery />", () => {
  const wrapper = shallow(<Gallery />);
  it("renders the component", () => {
    expect(wrapper).not.toBeNull();
  });
  it("renders the nav bar", () => {
    const navBar = wrapper.find("SearchBar").props();
    expect(navBar).not.toBeNull();
  });
  it("renders the snackbar with open as false", () => {
    const modal = wrapper.find("ForwardRef(Snackbar)").props();
    expect(modal).not.toBeNull();
    expect(modal.open).toBe(false);
  });
  it("renders the modal with open as false", () => {
    const modal = wrapper.find("ForwardRef(Modal)").props();
    expect(modal).not.toBeNull();
    expect(modal.open).toBe(false);
  });
});
