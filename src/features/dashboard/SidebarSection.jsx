import NavbarItems from "../../components/ui/NavbarItems";

function SidebarSection({ section, closeHandler }) {
  console.log(section);

  return (
    <div>
      <div className="mb-3 text-xs font-semibold tracking-wider text-slate-500 uppercase">
        {section.sectionName}
      </div>
      <NavbarItems
        items={section.sectionItems}
        handlerCloseMenu={closeHandler}
        column={true}
      />
    </div>
  );
}

export default SidebarSection;
