import MainLayout from '@/layouts/main.layout'
import MembersListContainer from '@/pods/members-list/members-list.container'
import OrgDetailsContainer from '@/pods/org-details/org-details.container'
import { SearchOrgContainer } from '@/pods/search-org/search-org.container'

const OrganizationScene = () => {
  return (
    <MainLayout>
        <SearchOrgContainer />
        <OrgDetailsContainer />
        <MembersListContainer />
    </MainLayout>
  )
}

export default OrganizationScene