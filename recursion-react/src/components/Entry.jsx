import { useState } from "react";

function Entry({ entry, level }) {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div style={{ paddingLeft: `${level * 20}px` }} >

            <button onClick={() => { setIsExpanded((prev) => !prev) }}>
                {entry.children && '+'} {entry.name}
            </button>

            {
                isExpanded &&
                entry.children?.map((child) => <Entry entry={child} level={level + 1} />)

            }


        </div>

    )
}

export default Entry;