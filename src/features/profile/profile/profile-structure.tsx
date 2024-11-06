"use client";
import { Avatar, Box, Button, Icon, Input } from "@chakra-ui/react";
import { AiOutlineBell, AiOutlineCalendar, AiOutlineDelete, AiOutlineEdit, AiOutlineSave, AiOutlineStar } from "react-icons/ai";
import { getUserById } from "@/business/user/userById";
import { useEffect, useState } from "react";
import { ProfileInterface, UserInterface } from "@/business/interfaces/userInterface";
import { useSession } from "next-auth/react";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { storage } from "@/service/configFirebase";
import { useAccountantStore } from "@/store/accountant.store";
import { SelectComponent } from "@/features/ui";
import { updateProfile } from "@/business/user/updateProfile";
import { toast } from "sonner";
import { countries } from "@/features/auth/register/utils/countrys";


function ProfileStructure() {
    const { data: session, status } = useSession();
    const [isEditing, setIsEditing] = useState(false)
    // const [theme, setTheme] = useState('light')
    const [userState, setUserState] = useState<UserInterface>();
    const [imgProfile, setImgProfile] = useState<string | null>(null);
    const [profileUpdate, setProfileUpdate] = useState<Partial<ProfileInterface>>({
        firstName: '',
        bio: '',
        country: '',
        gender: '',
    });
    const reminderCount = useAccountantStore((state) => state.reminderCount);

    const onChangeProfile = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProfileUpdate((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    }


    useEffect(() => {
        const updateAvatar = async () => {
            if (session?.accessToken && imgProfile) {

                const success = await updateProfile({ avatarUrl: imgProfile }, session.accessToken);
                toastest(success);

                if (session.user.id) {
                    const updatedUser = await getUserById(session.user.id, session.accessToken);
                    setUserState(updatedUser); // Actualizamos el estado con el usuario actualizado
                }
            }
        };

        if (imgProfile) {
            updateAvatar();
        }
    }, [imgProfile, session?.accessToken]);


    async function uploadFile(file: File) {

        if (session?.user) {
            const imgName = uuidv4();
            const avatarRef = ref(storage, `AvatarLinks/${session.user.email}/${imgName}`);

            try {
                await uploadBytes(avatarRef, file);
                const downloadURL = await getDownloadURL(avatarRef);
                setImgProfile(downloadURL);
            } catch (error) {
                console.error("Error al subir la imagen:", error);
                throw error;
            }
        } else {
            throw new Error("No hay usuario autenticado.");
        }
    }

    useEffect(() => {
        const sendIdUser = async () => {
            if (!session || !session.user.id) return;
            if (status === 'authenticated') {
                const user = await getUserById(session.user.id, session.accessToken);
                setUserState(user);
            }
        }

        sendIdUser();
    }, [session, session?.user, session?.user.id])



    const toastest = (promise: boolean) => {
        if (promise) {
            toast.success("Se ha actualizado el perfil correctamente", {
                position: "top-right",
                style: {
                    background: "#00ff00",
                    color: "#000000"

                }
            });
        }
        else {
            toast.error("Error al actualizar el perfil", {
                position: "top-right",
                style: {
                    background: "#ff0000",
                    color: "#000000"

                }
            });
        }
    }


    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        try {
            if (target instanceof HTMLInputElement) {
                if (target && target.files && target.files.length > 0) {
                    const result = target.files[0];

                    // console.log(result);
                    uploadFile(result);

                } else {
                    console.error("No files selected or target is not a file input");
                }
            }
        } catch (error) {
            console.error(error)
        }
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!session?.accessToken) return;

        if (!profileUpdate.gender && !profileUpdate.country) {
            toast.error("Please select at least one field: Gender or Country.");
            return;
        }

        // Filtrar el objeto profileUpdate para solo enviar los campos con valores no vacíos
        const updatedProfile = Object.fromEntries(
            Object.entries(profileUpdate).filter(([key, value]) => value !== '')
        );

        console.log(updatedProfile);

        const promise = await updateProfile(profileUpdate, session.accessToken);
        toastest(promise);
    }



    return (

        <div className="w-11/12 h-full flex overflow-y-auto flex-col items-center gap-2 mx-auto bg-white/90 backdrop-blur-sm shadow-xl py-5 px-4 rounded-2xl">
            <div>
                <div className="text-2xl md:text-3xl font-bold text-center text-gray-800">
                    ✨ Your Awesome Profile ✨
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex  items-center flex-col gap-2">
                    <div className="flex flex-col gap-2 items-center">

                        <Box display="flex" alignItems="center" h={'auto'} justifyContent="center" flexDirection="column" position="relative">
                            <label htmlFor="profileUpdate" style={{ cursor: 'pointer', position: 'relative' }}>
                                <Avatar
                                    _hover={{

                                        opacity: session?.user ? 0.7 : 1,
                                        transition: 'opacity 0.3s ease-in-out',
                                    }}
                                    src={userState?.profile?.avatarUrl}
                                    name={userState?.username}
                                    width={52}
                                    height={52}

                                    overflow='hidden'
                                />
                                {session?.user && (
                                    <>
                                        <Box
                                            position="absolute"
                                            top="0"
                                            left="0"
                                            width="100%"
                                            height="100%"
                                            rounded='full'
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            bg="rgba(0, 0, 0, 0.6)"
                                            opacity="0"
                                            _hover={{ opacity: 1 }}
                                            transition="opacity 0.3s ease-in-out"
                                        >
                                            <Icon as={FaEdit} boxSize={6} color="white" />
                                        </Box>

                                        <Input
                                            id="profileUpdate"
                                            type="file"
                                            accept=".jpg, .png"
                                            display="none"
                                            onChange={handleChangeFile}
                                        />

                                    </>
                                )}
                            </label>

                        </Box>
                        {!isEditing ? (
                            <>
                                <h1 className="truncate text-xl font-semibold text-gray-800 text-center">{userState?.username}</h1>
                                <div className="flex items-center gap-2 text-text-45 ">
                                    <span className="min-w-28 truncate text-center ">
                                        {userState?.profile?.bio ? userState.profile.bio : "No boi yet"}
                                    </span>
                                </div>
                                <p className="text-text-25 text-center font-semibold">{userState?.profile?.country ? userState.profile.country : "No country yet"}</p>
                            </>

                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 justify-center">
                                <div className="flex flex-col items-center gap-2 text-text-45 ">
                                    <span className="min-w-28 truncate text-center text-lg text-text-85">firstname</span>
                                    <input onChange={onChangeProfile} name="firstName" value={profileUpdate.firstName} type="text" className="w-full p-1 border outline-none text-black border-gray-300 rounded-md" />
                                </div>
                                <div className="flex flex-col  items-center gap-2 text-text-45 ">
                                    <span className="min-w-28 truncate text-center text-lg text-text-85">bio:</span>
                                    <input onChange={onChangeProfile} name="bio" value={profileUpdate.bio} type="text" className="w-full p-1 border text-black outline-none border-gray-300 rounded-md" />
                                </div>

                                <div className="flex flex-col  items-center gap-2 text-text-45 ">
                                    <span className="min-w-28 truncate text-center text-lg text-text-85">genre:</span>
                                    <div>
                                        <select name="gender" id="gender" className="w-full p-2 border outline-none text-black border-gray-300 rounded-md" value={profileUpdate.gender}
                                            onChange={onChangeProfile} >
                                            <option value="" disabled>Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col  items-center gap-2 text-text-45 ">
                                    <span className="min-w-28 truncate text-center text-lg text-text-85">country:</span>
                                    <select name="country" className="w-full p-2 border outline-none text-black border-gray-300 rounded-md" value={profileUpdate.country}
                                        onChange={onChangeProfile} >
                                        <option value="" disabled>Select Country</option>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country}>{country}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex  items-center gap-2 justify-center">
                                    <Button type="submit" colorScheme="green">
                                        Guardar
                                    </Button>
                                    <Button onClick={() => setIsEditing(false)} colorScheme="red">
                                        Cancel
                                    </Button>
                                </div>
                            </form>
                        )}



                    </div>

                    {!isEditing && (
                        <button onClick={() => setIsEditing(true)} className="bg-gradient-to-r flex items-center gap-1 from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
                            <AiOutlineEdit size={30} />
                            editar perfil
                        </button>
                    )}
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-pink-200 to-pink-100 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                        <div className="flex items-center justify-between">
                            {/* <Bell className="h-8 w-8 text-pink-500" /> */}
                            <AiOutlineBell size={50} className="text-pink-500"></AiOutlineBell>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-gray-800">{reminderCount}</p>
                                <p className="text-sm text-gray-600">Recordatorios activos</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-200 to-purple-100 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                        <div className="flex items-center justify-between">
                            <AiOutlineCalendar size={50} className="text-purple-500" />
                            <div className="text-right">
                                <p className="text-2xl font-bold text-gray-800">128</p>
                                <p className="text-sm text-gray-600">Tareas Completadas</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-200 to-yellow-100 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                        <div className="flex items-center justify-between">
                            <AiOutlineStar size={50} className=" text-yellow-500" />
                            <div className="text-right">
                                <p className="text-2xl font-bold text-gray-800">95%</p>
                                <p className="text-sm text-gray-600">Importantes</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-between text-slate-900 font-semibold">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="theme-mode" >Dark Mode</label>
                        {/* <switch
                            id="theme-mode"
                        // checked={theme === 'dark'}
                        // onCheckedChange={toggleTheme}
                        /> */}
                    </div>
                    <button className="bg-gray-50 p-2 rounded-lg">
                        Sync with Calendar
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ProfileStructure;