import { yupResolver } from '@hookform/resolvers/yup';
import { ReactElement } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';
import { CloseButton } from '..';
import { Modal, Title } from '../../atoms';
import { Header, Container, Form } from './style';

interface IModalSingleText {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  labelTitle: string;
  submitButton: string;
  defaultTextValue?: string;
  onSubmit: SubmitHandler<FieldValues>;
  schema: AnyObjectSchema;
}

export function ModalSingleText({
  isOpen,
  closeModal,
  schema,
  onSubmit,
  title,
  labelTitle,
  submitButton,
  defaultTextValue = '',
}: IModalSingleText): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      text: defaultTextValue,
    },
    resolver: yupResolver(schema),
  });

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <Container>
        <Header>
          <Title title={title} />
          <CloseButton handleDelete={closeModal} />
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="text">{labelTitle}:</label>
            <input type="text" id="text" {...register('text')} />
            <p>{errors.text?.message}</p>
          </div>
          <button type="submit">
            <span>{submitButton}</span>
          </button>
        </Form>
      </Container>
    </Modal>
  );
}
