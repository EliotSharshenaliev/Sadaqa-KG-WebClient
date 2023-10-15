import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AuthService from "../../service/auth"
import {EscapeEvent} from "../keyboard_events/EscapeEvent";
interface DeleteConfirmModalInterface {
    show: boolean,
    onClose: () => void,
}

export function DeleteConfirmationModal({show, onClose}: DeleteConfirmModalInterface) {
    const [isDeleting, setIsDeleting] = React.useState(false)

    const onDelete = async () => {
        try {
            setIsDeleting(true)
            await AuthService.deleteCurrentUser()
        }finally {
            setIsDeleting(false)
            onClose()
            document.location.reload()
        }
    }

    return (
        <EscapeEvent state={show} onEvent={onClose}>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Подтверждение Удаления</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Вы уверены, что хотите удалить свой аккаунт? Помните, что это действие необратимо и приведет к следующим потерям:
                    </p>
                    <ul>
                        <li>Удаление подписки на сумму N сомов в месяц в пользу благотворительного фонда <strong className={"text-danger"}>Sadaqa KG</strong>.</li>
                        <li>Удаление всех ваших пользовательских данных на сервисе Sadaqa KG и других связанных с ним сервисах.</li>
                    </ul>
                    <p>Вы уверены, что хотите продолжить?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose} disabled={isDeleting}>
                        Отмена
                    </Button>
                    <Button variant="danger" onClick={onDelete} disabled={isDeleting}>
                        {
                            isDeleting ? "Удаление..." : "Удалить Аккаунт"
                        }
                    </Button>
                </Modal.Footer>
            </Modal>
        </EscapeEvent>
    );
}