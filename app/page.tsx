import BreadcrumbsComponent from "@/components/bread-crumbs";
import Flow from "@/components/flow/dataflow";
import TabsComponent from "@/components/tabs-component";


export default function Home() {
  return (
    <section className="flex flex-col gap-4">
      <BreadcrumbsComponent items={[{ name: "Production", href: "/" }, { name: "Visao Geral", href: "/" }]} />
      <TabsComponent items={[{
        name: "Dataflow", key: "dataflow", content: <div className="h-[900px]">
          <Flow />
        </div>
      }, { name: "Aplicacoes", key: "apps", content: <div>Aplicacoes</div> }]} />
    </section>
  );
}
