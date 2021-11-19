import { ErrorPage } from '../../components/ErrorPage';
import { Theme } from '../../components/Theme';

export const Error404 = () => {
    
    return (
        <Theme>
            <ErrorPage message={'page not found!'} />
        </Theme>
    )
}