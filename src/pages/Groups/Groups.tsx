import { useSelector } from 'react-redux';

const Groups = () => {

  const sidebarIsActive = useSelector((state:any) => state.sidebarToggle.isActive);

  return (
    <section className={`groups ${!sidebarIsActive && "sidebar-notactive"}`}>
    </section>
  )
}

export default Groups;