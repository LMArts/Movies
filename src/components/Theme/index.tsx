import { ReactNode } from 'react';
import * as C from './styles';

type Props = {
    children: ReactNode;
}

export const Theme = ({children}: Props) =>{
    return(
        <C.Container>
            <C.Page>
                {children}
            </C.Page>
        </C.Container>
    );
}