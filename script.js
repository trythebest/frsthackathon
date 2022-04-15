
            var table = document.createElement("table");
            table.className = "table";
            //head code
            var thead = document.createElement("thead");
            thead.className = "thead-dark";

            var tr = document.createElement("tr");
            

            var th1 = createtrth("th", "Books");
            var th2 = createtrth("th", "ISBN");
            var th3 = createtrth("th", "No.pages");
            var th4 = createtrth("th", "Authors");
            var th5 = createtrth("th", "Publisher");
            var th6 = createtrth("th", "Released");

            tr.append(th1, th2, th3, th4, th5, th6);
            thead.append(tr);

            //body of the table code
            var tbody = document.createElement("tbody");
            var tr = document.createElement("tr");
            tr.className="tr";
            

            async function foo() {
                try {
                    let res = await fetch("https://anapioficeandfire.com/api/books");
                    let res1 = await res.json();
                    console.log(res1)
                    for (var i = 0; i <= res1.length; i++) {
                        tbody.append(td(res1[i].name, res1[i].isbn, res1[i].numberOfPages, res1[i].authors, res1[i].publisher, res1[i].released));
                    }

                } catch (error) {
                    console.log(error)
                }

            }
            //creating tables using DOM



            tbody.append(tr);

            table.append(thead, tbody);
            document.body.append(table);
            foo();

            function td(cname, cisbn, cnumberOfPages, cauthors, cpublisher, creleased) {

                var bok = createtrth("td", cname);
                var is = createtrth("td", cisbn);
                var no = createtrth("td", cnumberOfPages);
                var aut = createtrth("td", cauthors);
                var pub = createtrth("td", cpublisher);
                var rel = createtrth("td", creleased);

                var tr = document.createElement("tr");
                tr.className="tr"
                tr.append(bok, is, no, aut, pub, rel);
                return tr;

            }




            function createtrth(element, values) {
                var ele = document.createElement(element);
                ele.innerHTML = values;
                return ele;

            }


            function filtersearch(){
                var input, filter,table, tr, td, i,txtValues;
                input=document.getElementById("boxsearch");
                filter=input.value.toUpperCase();
                table=document.getElementsByClassName("table");
                tr=document.getElementsByClassName("tr");
                 for(i=0;i<tr.length;i++){
                     td=tr[i].getElementsByTagName("td")[0];
                     if(td){
                         txtValues=td.textContent||td.innerText;
                         if(txtValues.toUpperCase().indexOf(filter) > -1){
                             tr[i].style.backgroundColor="red";
                         }else{
                             tr[i].style.display="none";
                         }
                     }
                 }

            }

            

           
