import PropTypes from 'prop-types';
import s from './ContactsListItem.module.scss';
import { CSSTransition } from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

function ContactsListItem({ items, onDeleteContact }) {
  return (
    <>
      <TransitionGroup component={null}>
        {items.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames={s}>
            <li className={s.item}>
              <div className={s.content}>
                <p>
                  {name}: {number}
                </p>
              </div>
              <Button
                style={{ marginLeft: 'auto', width: 115 }}
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </Button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
      {items.length === 0 && <p>Contacts not found</p>}
    </>
  );
}

ContactsListItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
