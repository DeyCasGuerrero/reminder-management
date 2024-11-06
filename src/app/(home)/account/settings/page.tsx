import React from 'react'
import { FiMoon, FiSun, FiImage, FiType, FiVolume2, FiBell, FiLock, FiHelpCircle, FiCalendar, FiClock, FiMessageSquare, FiSave, FiRefreshCw } from 'react-icons/fi'
// import { Switch } from '@/components/ui/switch'
// import { Slider } from '@/components/ui/slider'
// import { Select } from '@/components/ui/select'

export default function ConfiguracionAppRecordatorios() {
    return (

        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 w-full max-w-md shadow-xl">
            <h1 className="text-4xl font-bold text-white mb-6 text-center">Configuración</h1>

            <div className="space-y-6">
                {/* Modo Oscuro / Claro */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <FiMoon className="text-white text-xl" />
                        <span className="text-white font-medium">Modo Oscuro</span>
                    </div>
                    {/* <Switch /> */}
                </div>

                {/* Cambiar Fondo */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <FiImage className="text-white text-xl" />
                        <span className="text-white font-medium">Cambiar Fondo</span>
                    </div>
                    <button className="bg-white bg-opacity-30 hover:bg-opacity-40 text-white px-3 py-1 rounded-full transition duration-300">
                        Elegir
                    </button>
                </div>

                {/* Color de Letra */}
                <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                        <FiType className="text-white text-xl" />
                        <span className="text-white font-medium">Color de Letra</span>
                    </div>
                    <div className="flex space-x-2">
                        {['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-purple-500'].map((color) => (
                            <button key={color} className={`w-8 h-8 rounded-full ${color}`}></button>
                        ))}
                    </div>
                </div>

                {/* Formato de Fecha */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <FiCalendar className="text-white text-xl" />
                        <span className="text-white font-medium">Formato de Fecha</span>
                    </div>
                    {/* <Select defaultValue="dd/mm/yyyy">
              <option value="dd/mm/yyyy">DD/MM/YYYY</option>
              <option value="mm/dd/yyyy">MM/DD/YYYY</option>
              <option value="yyyy-mm-dd">YYYY-MM-DD</option>
            </Select> */}
                </div>

                {/* Formato de Hora */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <FiClock className="text-white text-xl" />
                        <span className="text-white font-medium">Formato de Hora</span>
                    </div>
                    {/* <Select defaultValue="24h">
              <option value="24h">24 horas</option>
              <option value="12h">12 horas (AM/PM)</option>
            </Select> */}
                </div>

                {/* Frecuencia de Recordatorios */}
                <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                        <FiBell className="text-white text-xl" />
                        <span className="text-white font-medium">Frecuencia de Recordatorios</span>
                    </div>
                    {/* <Select defaultValue="15min">
              <option value="5min">Cada 5 minutos</option>
              <option value="15min">Cada 15 minutos</option>
              <option value="30min">Cada 30 minutos</option>
              <option value="1h">Cada hora</option>
            </Select> */}
                </div>

                {/* Integración con GPT */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <FiMessageSquare className="text-white text-xl" />
                        <span className="text-white font-medium">Integración con GPT</span>
                    </div>
                    {/* <Switch /> */}
                </div>

                {/* Frecuencia de Sugerencias GPT */}
                <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                        <FiRefreshCw className="text-white text-xl" />
                        <span className="text-white font-medium">Frecuencia Sugerencias GPT</span>
                    </div>
                    {/* <Select defaultValue="daily">
              <option value="hourly">Cada hora</option>
              <option value="daily">Diariamente</option>
              <option value="weekly">Semanalmente</option>
            </Select> */}
                </div>

                {/* Autoguardado */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <FiSave className="text-white text-xl" />
                        <span className="text-white font-medium">Autoguardado</span>
                    </div>
                    {/* <Switch /> */}
                </div>

                {/* Volumen de Notificaciones */}
                <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                        <FiVolume2 className="text-white text-xl" />
                        <span className="text-white font-medium">Volumen de Notificaciones</span>
                    </div>
                    {/* <Slider defaultValue={[50]} max={100} step={1} /> */}
                </div>

                {/* Privacidad */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <FiLock className="text-white text-xl" />
                        <span className="text-white font-medium">Privacidad</span>
                    </div>
                    <button className="text-white underline">Configurar</button>
                </div>

                {/* Ayuda */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <FiHelpCircle className="text-white text-xl" />
                        <span className="text-white font-medium">Ayuda</span>
                    </div>
                    <button className="text-white underline">Ver FAQ</button>
                </div>
            </div>
        </div>

    )
}