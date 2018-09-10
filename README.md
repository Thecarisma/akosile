#Akosile

Generate documentation for popular programming language such as Simple and partially C, C++, Java, C#, Python, PHP, Visual Basic, Ruby, Fortran, Tcl, Ring and JavaScript. Generate online documentation (HTML), hyperlinked PDF, RTF, Text File, Man Pages. Support Markdown documentation sources.

It generate documentation in the following output :

- [x] Webpage
- [ ] Man Page
- [ ] Text File
- [ ] PDF
- [ ] Rich Text Format
- [ ] Microsoft Document (doc)

### Currently supported Programming language

- [x] [simple-lang](https://github.com/simple-lang/simple)
- [ ] C/C++
- [ ] Java
- [ ] C#
- [ ] Visual Basic
- [ ] Python
- [ ] JavaScript

### Program Flags
```bash
--ds "/path/to/output/directory/"
--d "/path/to/source/to/be/documented/"
--m "/path/to/source/to/.ako mapfile/" 
--v  										- To print all the message in the console
```
The flags can be set from within the .ako file by specifying the goup AkoFlag and the variable to be the flag with the variable value to be the flag value. e.g 
```
...

[AkoFlags] {
	[destination](C:\Users\thecarisma\Documents\THECARISMA_GITHUB\tests\akosim\output\default)
	[verbose](yes)
	[directory](./)
	[docasindex](yes)
	[indexes](yes)
	[indexassummary](yes)
}

...
```

### Ako(.ako) File
Variables and groups can be declared in a .ako file which can hold all the flag for the documentation generation. The variable and group can be declare in this format 
```
[VariableName](VariableValue)
[Author](Azeez Adewale)

[GroupName]{
	[VariableName](VariableValue)
	[Blog][blog.php]
}
```

To use the variable in the comment you can append a double dollar sign before the variable name e.g to access the Variable **Author** do **$$Author** in the comment after documentation it will expands to **Azeez Adewale**. To access the variables in a group do `@GroupName VariableName` e.g to access the **Blog** variable do **@GroupName Blog** it will expands to **blog.php** after documentation. If the value of the variable is an hyperlink it will expands to Variable Name with the value as the hyperlink. 

### Comment Format/Style
The program supports the use of Github flavoured markdown and html in the comment. It also allow using pre declared variable in a .ako file. Depending on the source file the member blocks, methods or functions can be reference using the @ before the keyword. e.g. To reference another block in a simple-lang source file.
```simple-lang

/*
	same as @Block Future(one,two) block
*/
block Initial()
	return false
	
block Future(one,two)
	return one >> two
```

The `@Block Future(one,two)` in the `Initial()` block comment will link to `block Future(one,two)`. Same rule apply to other programming language e.g in C/C++.

```C
/*
	same as @Function Future(one,two) function
*/
const char** Initial()
	return false
	
extern int Future(one,two)
	return one >> two
``` 