
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings2, Siren, UserCircle } from "lucide-react"
import ProfileTab from "../ProfileTab"
import SettingsTab from "../SettingsTab"
import HelpTab from "../HelpTab/HelpTab"
import { ConfigurationTabsProps } from "./ConfigurationsTabs.types"

export default function ConfigurationsTabs(props: ConfigurationTabsProps) {
  const { tab } = props

  return (
    <Tabs defaultValue={tab} className="sm:flex sm:flex-row items-center sm:items-start gap-0 m-0">
      <TabsList className="flex flex-row sm:flex-col gap-1 p-2.5 bg-background items-start w-[200px] h-fit">
        <TabsTrigger value="profile" className="flex items-center w-fit gap-2 p-2.5 justify-center sm:w-full sm:justify-start h-fit">
          <UserCircle className="size-5" />
          <p className="hidden xs:flex">Mi perfil</p>
        </TabsTrigger>
        <TabsTrigger value="settings" className="flex items-center w-fit gap-2 p-2.5 justify-center sm:w-full sm:justify-start h-fit">
          <Settings2 className="size-5" />
          <p className="hidden xs:block">Configuración</p>
        </TabsTrigger>
        <TabsTrigger value="help" className="flex items-center w-fit gap-2 p-2.5 justify-center sm:w-full sm:justify-start h-fit">
          <Siren className="size-5" />
          <p className="hidden xs:block">Obtener ayuda</p>
        </TabsTrigger>
      </TabsList>
      <div className="border sm:min-h-full min-w-full sm:min-w-fit"></div>
      <TabsContent value="profile" className="text-sm min-h-[497px] h-full w-full">
        <ProfileTab />
      </TabsContent>
      <TabsContent value="settings" className="text-sm min-h-[497px] w-full">
        <SettingsTab />
      </TabsContent>
      <TabsContent value="help" className="text-sm min-h-[497px]">
        <HelpTab />
      </TabsContent>
    </Tabs>
  )
}
