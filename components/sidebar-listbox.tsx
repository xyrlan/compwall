import React from "react";
import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import {
  AreaChart,
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
          icon: <TvMinimal />,
        },
        {
          title: "Sources",
          key: "sources",
          icon: <Waypoints />,
        },
        {
          title: "Entidades",
          key: "entities",
          icon: <Group />,
        },
        {
          title: "Transformações",
          key: "transformations",
          icon: <Code />,
        },
        {
          title: "Funcionalidades",
          key: "features",
          icon: <Layers3 />,
        },
        {
          title: "Serviços",
          key: "services",
          icon: <Pyramid />,
        },
        {
          title: "Datasets",
          key: "datasets",
          icon: <Database />,
        },
        {
          title: "Permissões",
          key: "permissions",
          icon: <KeyIcon />,
        },
      ],
    },
    {
      title: "PLATAFORMA & INFRA",
      items: [
        {
          title: "Tarefas",
          key: "jobs",
          icon: <Pickaxe />,
        },
        {
          title: "Monitoramento",
          key: "monitoring",
          icon: <AreaChart />,
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
              className={` ${selectedKey === item.key ? "text-[#9fbf38]" : ""}`}
              startContent={item.icon}
              onClick={() => {
                if (item.key === "overview") {
                  router.push("/");
                } else {
                  router.push(`/${item.key}`);
                }
              }}
            >
              {item.title}
            </ListboxItem>
          ))}
        </ListboxSection>
      ))}
    </Listbox>
  );
}
