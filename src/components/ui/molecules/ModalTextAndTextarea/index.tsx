import { yupResolver } from '@hookform/resolvers/yup';
import { ReactElement } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';
import { CloseButton } from '..';
import { Modal, Title } from '../../atoms';
import { Header, Container, Form } from './style';

interface IModalTextAndTextarea {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  label: {
    text: string;
    textarea: string;
  };
  submitButtonTitle: string;
  defaultValue?: {
    text?: string;
    textarea?: string;
  };
  onSubmit: SubmitHandler<FieldValues>;
  schema: AnyObjectSchema;
}

export function ModalTextAndTextarea({
  isOpen,
  closeModal,
  schema,
  onSubmit,
  title,
  label,
  submitButtonTitle,
  defaultValue,
}: IModalTextAndTextarea): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      text: defaultValue?.text || '',
      textarea: defaultValue?.textarea || '',
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
            <label htmlFor="text">{label.text}:</label>
            <input type="text" id="text" {...register('text')} />
            <p>{errors.text?.message}</p>
          </div>
          <div>
            <label htmlFor="textarea">{label.textarea}:</label>
            <textarea id="textarea" {...register('textarea')} />
            <p>{errors.textarea?.message}</p>
          </div>
          <button type="submit">
            <span>{submitButtonTitle}</span>
          </button>
        </Form>
      </Container>
    </Modal>
  );
}
