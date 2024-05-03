export default function LeftMenu({ items, handleClick }) {
    return (
        <div className="leftMenu">
            {items.map((item, index) => (
                <p key={index} onClick={() => handleClick(item.type)}>{item.label}</p>
            ))}
        </div>
    );
}