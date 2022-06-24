import { useModal } from '~/context/modal';

export const action = () => {

    return 'done';

};

export default function Index() {

    const [ modal, setModal ] = useModal();

    return (
        <button onClick={ () => setModal( true ) }>Open Modal</button>
    );
}
