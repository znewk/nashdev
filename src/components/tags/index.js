// import styles from "./style.module.css";
// import { Space, Tag } from "antd";
// import { useState } from "react";
// const { CheckableTag } = Tag;

// const tagsData = [
//   "Android",
//   "Мобильное Приложение",
//   "Web",
//   "Frontend",
//   "Серверное ПО",
//   "Data Analitycs"
// ];

// const Tags  = () => {
//   const [selectedTags, setSelectedTags] = useState(["Books"]);

//   const handleChange = (tag, checked) => {
//     const nextSelectedTags = checked
//       ? [...selectedTags, tag]
//       : selectedTags.filter((t) => t !== tag);
//     console.log("You are interested in: ", nextSelectedTags);
//     setSelectedTags(nextSelectedTags);
//   };

//   return (
//     <>
//       <span style={{ display: 'inline-block', paddingBottom: '15px' }}>Выберите Категорию:</span>
//       <Space size={[12, 6]} wrap>
//         {tagsData.map((tag) => (
//           <CheckableTag
//             key={tag}
//             checked={selectedTags.includes(tag)}
//             onChange={(checked) => handleChange(tag, checked)}
//             className={`${selectedTags.includes(tag) ? styles.tagChecked : ''} ${styles.tagCustom}`}

//           >
//             {tag}
//           </CheckableTag>
//         ))}
//       </Space>
//     </>
//   );
// };

// export default Tags;

import React, { useState } from 'react';
import { Tag } from "antd";
const { CheckableTag } = Tag;

const categories = [
  {id: 1, title:  "Android" },
  {id: 2,  title: "Мобильное Приложение"},
  {id: 3,  title:  "Web"},
  {id: 4,  title: "Frontend"},
  {id: 5,   title: "Серверное ПО"},
  { id: 6, title: "Data Analytics" }];

const Tags = ({ onChange }) => {
    const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);

    const handleChange = (tag, checked) => {
        const nextSelectedCategoryIds = checked
            ? [...selectedCategoryIds, tag.id]
            : selectedCategoryIds.filter(id => id !== tag.id);
        
        setSelectedCategoryIds(nextSelectedCategoryIds);
        onChange(nextSelectedCategoryIds); // Вызываем функцию обратного вызова
    };

    return (
        <div>
            {categories.map(tag => (
                <CheckableTag
                    key={tag.id}
                    checked={selectedCategoryIds.includes(tag.id)}
                    onChange={checked => handleChange(tag, checked)}
                >
                    {tag.title}
                </CheckableTag>
            ))}
        </div>
    );
};

export default Tags;