import { Route, Switch } from 'react-router-dom'
import DirectoryPage from '../pages/DirectoryPage'
import RegisterPage from '../pages/RegisterPage'
import EditPage from '../pages/EditPage'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <DirectoryPage />
            </Route>

            <Route path="/register">
                <RegisterPage />
            </Route>

            <Route path="/edit">
                <EditPage />
            </Route>

        </Switch>
    )
}

export default Routes