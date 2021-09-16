import { Route, Switch } from 'react-router-dom'
import DirectoryPage from '../pages/DirectoryPage'
import RegisterPage from '../pages/RegisterPage'


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <DirectoryPage />
            </Route>

            <Route path="/register">
                <RegisterPage />
            </Route>
        </Switch>
    )
}

export default Routes