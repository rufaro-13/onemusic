
"use client";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from '../images/music.png'

const displayName =sessionStorage.getItem("displayName")
const displayemail =sessionStorage.getItem("loggedemail")
console.log(displayName,displayemail)
function NavigBar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">One Music</span>
      </Navbar.Brand>
      
      <Navbar.Collapse>
        <Navbar.Link href="/main" active>
          Home
        </Navbar.Link>
        {/* <Navbar.Link href="#">Library</Navbar.Link> */}
        <Navbar.Link href="/main/playlist">Playlists</Navbar.Link>
        <Navbar.Link href="#">Search</Navbar.Link>
        {/* <Navbar.Link href="/main/playlist">Contact</Navbar.Link> */}
      </Navbar.Collapse>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{displayName}</span>
            <span className="block truncate text-sm font-medium">{displayemail}</span>
          </Dropdown.Header>
          <Dropdown.Item>Account</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          {/* <Dropdown.Item>Earnings</Dropdown.Item> */}
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
export default (NavigBar);