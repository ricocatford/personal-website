export default function DropdownItem({ value, checked, onClick }) {
    return (
        <div className="dropdown__content flex" onClick={onClick}>
            <p>{value}</p>
            {checked && (
                <span>
                    <i className="fa-solid fa-circle-check dropdown__option--active" />
                </span>
            )}
        </div>
    );
}
