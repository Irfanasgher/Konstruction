import React from 'react';
import { Menu, Grid } from 'antd';
const { SubMenu } = Menu;
import Link from 'next/link';

const { useBreakpoint } = Grid;
const MenuList = ({ classN }) => {
	const { md } = useBreakpoint();
	return (
		// <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
		<Menu className={classN} mode={md ? 'horizontal' : 'inline'}>
			<Menu.Item key='home'>
				<Link href='/'>
					<a>HOME</a>
				</Link>
			</Menu.Item>

			<SubMenu title='EXCAVATION'>
				<Menu.Item key='demolition'>
					<Link href='/demolition'>
						<a>DEMOLITION</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='excavation'>
					<Link href='/excavation-services'>
						<a>EXCAVATION SERVICES</a>
					</Link>
				</Menu.Item>
			</SubMenu>
			<SubMenu title='CONCRETE'>
				<Menu.Item key='concerete_foundations'>
					<Link href='/concerete-foundations'>
						<a>CONCRETE FOUNDATIONS</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='concerete_footings'>
					<Link href='/concerete-footings'>
						<a>CONCRETE FOOTINGS</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='concerete_slabs'>
					<Link href='/concerete-slabs'>
						<a>CONCRETE SLABS</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='concerete_waterproofing'>
					<Link href='/concerete-waterproofing'>
						<a>CONCRETE WATERPROOFING</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='concerete_underpinning'>
					<Link href='/underpinning'>
						<a>UNDERPINNING</a>
					</Link>
				</Menu.Item>
			</SubMenu>
			<SubMenu title='FRAMING'>
				<Menu.Item key='custom_home_framing'>
					<Link href='/custom_home_framing'>
						<a>CUSTOM HOME FRAMING</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='home_addition'>
					<Link href='/home-addition'>
						<a>HOME ADDITION</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='home_renovation'>
					<Link href='/home-renovation'>
						<a>HOME RENOVATION</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='basement_framing'>
					<Link href='/basement-framing'>
						<a>BASEMENT FRAMING</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='backup_framing'>
					<Link href='/backup-framing'>
						<a>BACKUP FRAMING</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='garage_framing'>
					<Link href='/garage-framing'>
						<a>GARAGE FRAMING</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='footings_framing'>
					<Link href='/footings-framing'>
						<a>FOOTINGS FRAMING</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='metal_stud_framing'>
					<Link href='/metal-stud-framing'>
						<a>METAL STUD FRAMING</a>
					</Link>
				</Menu.Item>
			</SubMenu>
			<SubMenu title='INSULATION'>
				<Menu.Item key='spray-foam-insulation'>
					<Link href='/spray-foam-insulation'>
						<a>SPRAY FOAM INSULATION</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='batt-insulation'>
					<Link href='/batt-insulation'>
						<a>BATT INSULATION</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='attic-insulation'>
					<Link href='/attic-insulation'>
						<a>ATTIC INSULATION</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='basement-insulation'>
					<Link href='/basement-insulation'>
						<a>BASEMENT INSULATION</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='blown-in-insulation'>
					<Link href='/blown-in-insulation'>
						<a>BLOWN IN INSULATION</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='radon-protection'>
					<Link href='/radon-protection'>
						<a>RADON PROTECTION</a>
					</Link>
				</Menu.Item>
			</SubMenu>
			<SubMenu title='DRYWALL'>
				<Menu.Item key='drywall-installation'>
					<Link href='/drywall-installation'>
						<a>DRYWALL INSTALLATION</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='drywall-taping'>
					<Link href='/drywall-taping'>
						<a>DRYWALL TAPING</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='drywall-ceiling'>
					<Link href='/drywall-ceiling'>
						<a>DRYWALL CEILING</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='fire-rated-drywall'>
					<Link href='/fire-rated-drywall'>
						<a>FIRE RATED DRYWALL</a>
					</Link>
				</Menu.Item>
			</SubMenu>

			<Menu.Item key='projects'>
				<Link href='/'>
					<a>PROJECTS</a>
				</Link>
			</Menu.Item>
			<Menu.Item key='contact_us'>
				<Link href='/contact_us'>
					<a>CONTACT US</a>
				</Link>
			</Menu.Item>
			<SubMenu title='ABOUT'>
				<Menu.Item key='our_team'>
					<Link href='/about-us'>
						<a>OUR TEAM</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='location'>
					<Link href='/'>
						<a>LOCATIONS</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='careers'>
					<Link href='/our_team'>
						<a>CAREERS</a>
					</Link>
				</Menu.Item>
				<Menu.Item key='blog'>
					<Link href='/'>
						<a>BLOG</a>
					</Link>
				</Menu.Item>
			</SubMenu>
		</Menu>
	);
};

export default MenuList;
