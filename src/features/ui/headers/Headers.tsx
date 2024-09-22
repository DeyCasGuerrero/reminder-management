"use client";
import { Avatar, Box, Button, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, VStack } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

export default function Header() {
    return (
        <header className="flex items-center px-4 gap-4  justify-between w-full overflow-hidden py-1 h-20 ">
            <div>
                <h1 className="text-2xl md:text-4xl font-bold text-white">
                    Reminders
                </h1>
            </div>
            <VStack className=" h-full flex  items-center justify-center gap-2">
                <Menu>
                    <MenuButton as={Box} cursor='pointer'>
                        <Button  height="auto" p={0} borderRadius="full" >
                            <Avatar name="Dey" src={'/profile.jpg'} />
                        </Button>
                    </MenuButton>
                    <MenuList color='black' p={2}>
                        <MenuGroup title='Profile' display='flex' flexDirection='column' gap={6}>
                            <MenuItem >My Account</MenuItem>
                            <Button colorScheme="red" ml={2} onClick={()=>signOut()}>LogOut</Button>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup title='Help'>
                            <MenuItem>Docs</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>
            </VStack>
        </header >
    )
}