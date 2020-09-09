
import React, { useState } from 'react';

function TodoForm() {
    const [value, setValue] = useState('');
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setValue('');
    };
}