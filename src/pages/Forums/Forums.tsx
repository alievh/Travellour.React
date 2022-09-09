import { useSelector } from 'react-redux';

const Forums = () => {
    const sidebarIsActive = useSelector((state:any) => state.sidebarToggle.isActive);

  return (
    <section className={`forums ${sidebarIsActive && "sidebar-notactive"}`}></section>
  )
}

export default Forums;