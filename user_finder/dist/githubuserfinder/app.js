const getUserDetails = () => {
    const userInput = document.getElementById('userinput');
    const userName = userInput.value.trim();
    let div = document.getElementById("user-card");
    const API_URL = `https://api.github.com/users/${userName}`;
    const data = async () => {
        fetch(API_URL)
            .then(response => response.json())
            .then(response => {
                if (response.bio===null){
                    response.bio="programmer"
                }
                console.log(response)
                div.innerHTML = "";
                div.innerHTML = `
                    <div class="user-info">
                        <img src="${response.avatar_url}" alt="User Image" class="user-image">
                        <div class="user-details">
                            <div class="user-name">${response.login}</div>
                            <div class="user-bio"><strong>${response.bio}</strong></div>
                            <div class="user-github">
                                <a href="${response.html_url}" target="_blank"><strong>GitHub Profile</strong></a>
                            </div>
                        </div>
                    </div>
                    <div class="user-stats">
                        <div class="stat-box">
                            <span class="value">${response.followers}</span>
                            <span class="parameter">Followers</span>
                        </div>
                        <div class="stat-box">
                            <span class="value">${response.public_repos}</span>
                            <span class="parameter">Repos</span>
                        </div>
                        <div class="stat-box">
                            <span class="value">${response.following}</span>
                            <span class="parameter">Following</span>
                        </div>
                    </div>`;
            })
            .catch(() => {
                alert("Error Occured while Fetching Data")
            });
    }
    data()
}
