import React from "react";
import { Listbox, ListboxItem, ListboxSection } from "@heroui/react";
import {
  AreaChart,
  ArrowRightLeft,
  Code,
  Database,
  Group,
  KeyIcon,
  Layers3,
  Pickaxe,
  Pyramid,
  TvMinimal,
  User,
  Waypoints,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function SidebarListbox() {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = React.useState("overview");
  const pathname = usePathname();

  React.useEffect(() => {
    if (pathname === "/") {
      setSelectedKey("overview");
    } else {
      setSelectedKey(pathname.split("/")[1]);
    }
  }, [pathname]);

  const listboxSections = [
    {
      title: "ÁREAS DE TRABALHO",
      items: [
        {
          title: "Visão geral",
          key: "overview",
          icon: <TvMinimal size={18} />,
        },
        {
          title: "Sources",
          key: "sources",
          icon: <Waypoints size={18} />,
        },
        {
          title: "Entidades",
          key: "entities",
          icon: <Group size={18} />,
        },
        {
          title: "Transformações",
          key: "transformations",
          icon: <Code size={18} />,
        },
        {
          title: "Funcionalidades",
          key: "features",
          icon: <Layers3 size={18} />,
        },
        {
          title: "Serviços",
          key: "services",
          icon: <Pyramid size={18} />,
        },
        {
          title: "Transações",
          key: "transactions",
          icon: <ArrowRightLeft size={18} />,
        },
        {
          title: "Datasets",
          key: "datasets",
          icon: <Database size={18} />,
        },
        {
          title: "Permissões",
          key: "permissions",
          icon: <KeyIcon size={18} />,
        },
      ],
    },
    {
      title: "PLATAFORMA & INFRA",
      items: [
        {
          title: "Tarefas",
          key: "jobs",
          icon: <Pickaxe size={18} />,
        },
        {
          title: "Monitoramento",
          key: "monitoring",
          icon: <AreaChart size={18} />,
        },
      ],
    },
    {
      title: "CONFIGURAÇÕES",
      items: [
        {
          title: "Contas e acesso",
          key: "accounts",
          icon: <User />,
        },
      ],
    },
  ];

  return (
    <Listbox aria-label="Listbox menu with sections" variant="flat">
      {listboxSections.map((section, index) => (
        <ListboxSection key={index} showDivider title={section.title}>
          {section.items.map((item, index) => (
            <ListboxItem
              key={index}
              // className={` ${selectedKey === item.key ? "text-[#2596be]" : ""}`}
              classNames={{
                title: ` ${selectedKey === item.key ? "text-[#2596be]" : ""}`,
              }}
              // startContent={item.icon}
              onPress={() => {
                if (item.key === "overview") {
                  router.push("/");
                } else {
                  router.push(`/${item.key}`);
                }
              }}
            >
              <div className="flex items-center gap-2">
                {item.icon}
                {item.title}
              </div>
            </ListboxItem>
          ))}
        </ListboxSection>
      ))}
    </Listbox>
  );
}
