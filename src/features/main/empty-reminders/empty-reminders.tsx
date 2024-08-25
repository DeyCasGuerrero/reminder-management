function EmptyReminders(){

    return(
        <div className="w-full border-2 flex items-center flex-col gap-3 text-center justify-center border-dashed border-blue-500 px-4 py-3">
            <h1>No hay recordatorios activos.</h1>
            <p>Añade tus recordatorios ahora mismo!</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Añadir recordatorio
            </button>
        </div>
    )
}

export default EmptyReminders;