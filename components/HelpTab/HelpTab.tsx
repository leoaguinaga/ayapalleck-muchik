import { Separator } from "@radix-ui/react-select";
import { Button } from "../ui/button";
import { Flag, TriangleAlert } from "lucide-react";


export default function HelpTab() {
    return (
        <div>
            <h2 className="text-lg p-2.5 font-semibold">Obtener ayuda</h2>
            <Separator className="border" />
            <div className="p-2.5 flex flex-col gap-1">
                <h3 className="font-medium">Números de atención al cliente</h3>
                <p className="text-muted-foreground">+51 954 246 156</p>
                <p className="text-muted-foreground">+51 960 606 442</p>
            </div>
            <Separator className="border" />
            <div className="p-2.5 flex flex-col gap-1">
                <h3 className="font-medium">Correos de atención al cliente</h3>
                <p className="text-muted-foreground">soporte@foxcode.com</p>
                <p className="text-muted-foreground">leoaguinaga03@outlook.com</p>
            </div>
            <Separator className="border" />
            <div className="p-2.5 flex flex-col items-start justify-between gap-1">
                <h3 className="font-medium">Reportes</h3>
                <p className="text-muted-foreground mb-1">Si tienes algún inconveniente con el uso o rendimiento de la plataforma, siéntete libre de enviarnos un reporte, nosotros generaremos un ticket y antenderemos tu caso lo más pronto posible. Agradecemos tu feedback!</p>
                <Button className="w-full h-8 flex items-center gap-1.5">
                    <TriangleAlert className="size-3.5" />
                    <p>Reportar problema</p>
                </Button>
            </div>
        </div>
    )
}
