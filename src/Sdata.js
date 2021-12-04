import local from "../src/images/img21.jpg";
import remote from "../src/images/img21.jpg";
import list from "../src/images/img21.jpg";

const Sdata = [
  {
    imgsrc: local,
    title: "Local Tunnel",
    text: "Create Local Tunnels which allow you to easily share a web service on your local development machine without messing with DNS and firewall settings.",
    buttonText: "Create Local Tunnels",
    goto: "/localTunnel",
    action: "local_tunnel"
  },
  {
    imgsrc: remote,
    title: "Remote Tunnel",
    text: "Create Remote Tunnels which allows you to connect to devices that aren't on your local network. ",
    buttonText: " Create Remote Tunnels",
    goto: "/remoteTunnel",
    action: "remote_tunnel"
  },
  {
    imgsrc: list,
    title: "List Tunnels",
    text: "See all the Local/Remote Tunnels that are available to use.",
    buttonText: " View Tunnels",
    goto: "/listTunnels",
    action: "list_tunnel"
  },
];

export default Sdata;
