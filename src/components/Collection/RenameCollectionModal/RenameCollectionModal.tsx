/* eslint-disable i18next/no-literal-string */

import useTranslation from 'next-translate/useTranslation';

import styles from './RenameCollectionModal.module.scss';

import Modal from 'src/components/dls/Modal/Modal';
import FormBuilder from 'src/components/FormBuilder/FormBuilder';
import { RuleType } from 'types/FieldRule';
import { FormFieldType } from 'types/FormField';

export type Collection = {
  id: number | string;
  name: string;
  checked?: boolean;
};

type RenameCollectionModalProps = {
  isOpen: boolean;
  defaultValue: string;
  onSubmit: (data: any) => void;
};

const RenameCollectionModal = ({ isOpen, onSubmit, defaultValue }: RenameCollectionModalProps) => {
  const { t } = useTranslation('profile');
  return (
    <Modal isOpen={isOpen}>
      <Modal.Body>
        <div className={styles.header}>Rename Collection</div>
        <div className={styles.newCollectionFormContainer}>
          <FormBuilder
            formFields={[
              {
                field: 'name',
                label: t('new-collection-name'),
                defaultValue,
                rules: [{ type: RuleType.Required, value: true, errorMessage: 'Required' }],
                type: FormFieldType.Text,
              },
            ]}
            actionText="Submit"
            onSubmit={onSubmit}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RenameCollectionModal;
