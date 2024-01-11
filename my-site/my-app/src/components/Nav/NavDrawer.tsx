import {
	AppBar,
	Box,
	Button,
	IconButton,
	Toolbar,
	Typography,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@suid/material";
import { DrawerProps } from "@suid/material/Drawer";
import { createMutable } from "solid-js/store";
import MenuIcon from "@suid/icons-material/Menu";
import MailIcon from "@suid/icons-material/Mail";
import InboxIcon from "@suid/icons-material/MoveToInbox";
import style from "./../../styles/navdrawer.module.css"

type Anchor = NonNullable<DrawerProps["anchor"]>;

export default function NavDrawer() {
	const state = createMutable<{ [K in Anchor]: boolean }>({
		left: false,
		top: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer =
		(anchor: Anchor, open: boolean) => (event: MouseEvent | KeyboardEvent) => {
			if (event.type === "keydown") {
				const keyboardEvent = event as KeyboardEvent;
				if (keyboardEvent.key === "Tab" || keyboardEvent.key === "Shift")
					return;
			}
			state[anchor] = open;
		};

	const list = (anchor: Anchor) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{["Home", "Resume", "Gallery"].map((text, index) => (
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div class={style.drawer}>
			{(["left"] as Anchor[]).map((anchor) => (
				<>
					<IconButton
						size="large"
						edge="start"
						color="warning"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon
							cursor="pointer"
							sx={{ margin: "1rem" }}
							onClick={toggleDrawer(anchor, true)}
						>
							{anchor}
						</MenuIcon>
					</IconButton>

					<Drawer
						anchor={anchor}
						open={state[anchor]}
						sx={{ zIndex: 9999 }}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</>
			))}
		</div>
	);
}
