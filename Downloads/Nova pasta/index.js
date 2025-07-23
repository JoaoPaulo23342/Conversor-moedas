// Menu Hamburguer
        document.getElementById('navbarToggle').addEventListener('click', function() {
            document.getElementById('navbarItems').classList.toggle('show');
        });
        
        // Consulta CEP
        document.getElementById('botao').addEventListener('click', async function() {
            const cep = document.getElementById('name').value.trim();
            const resultsList = document.getElementById('results');
            resultsList.innerHTML = '';
            
            if (!cep) {
                const li = document.createElement('li');
                li.className = 'error';
                li.textContent = 'Por favor, digite um CEP';
                resultsList.appendChild(li);
                return;
            }
            
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                const data = await response.json();
                
                if (data.erro) {
                    throw new Error('CEP não encontrado');
                }
                
                const fields = [
                    { label: 'CEP', value: data.cep },
                    { label: 'Logradouro', value: data.logradouro },
                    { label: 'Bairro', value: data.bairro },
                    { label: 'Cidade', value: data.localidade },
                    { label: 'Estado', value: data.uf }
                ];
                
                fields.forEach(field => {
                    if (field.value) {
                        const li = document.createElement('li');
                        li.innerHTML = `<strong>${field.label}:</strong> ${field.value}`;
                        resultsList.appendChild(li);
                    }
                });
                
            } catch (error) {
                const li = document.createElement('li');
                li.className = 'error';
                li.textContent = 'Erro ao buscar CEP: ' + error.message;
                resultsList.appendChild(li);
            }
        });