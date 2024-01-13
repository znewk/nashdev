import React, { useState } from 'react';
import styles from './style.module.css'
import classnames from 'classnames'
import { Tag } from "antd";
const { CheckableTag } = Tag;

const categories = [
  {id: 6, title:  "Android" },
  {id: 5,  title: "Мобильное Приложение"},
  {id: 4,  title:  "Web"},
  {id: 3,  title: "Frontend"},
  {id: 2,   title: "Серверное ПО"},
  { id: 1, title: "Data Analytics" }];

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
        <div className={styles.tagsWrapper}>
            {categories.map(tag => (
                <div
                    className={classnames(styles.tag, selectedCategoryIds.includes(tag.id) && styles.tagChecked)}
                    key={tag.id}
                    onClick={checked => handleChange(tag, checked)}
                    >
                    {tag.title}
                </div>
            ))}
        </div>
    );
};

export default Tags;