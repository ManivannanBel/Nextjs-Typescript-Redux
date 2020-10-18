import React from 'react'

function about() {
    return (
        <div>
            <h4>about</h4>
            <p>
                You're now ready to start converting files from .js to .tsx and leveraging the benefits of TypeScript!.

                A file named next-env.d.ts will be created in the root of your project. This file ensures Next.js types are picked up by the TypeScript compiler. You cannot remove it, however, you can edit it (but you don't need to).

                TypeScript strict mode is turned off by default. When you feel comfortable with TypeScript, it's recommended to turn it on in your tsconfig.json.

                By default, Next.js will do type checking as part of next build. We recommend using code editor type checking during development.

                If you want to silence the error reports, refer to the documentation for Ignoring TypeScript errors.
            </p>
            <style jsx>
                {`
                    h4{
                        color : red;
                    }
                    p {
                        color : blue;
                    }
                `}
            </style>
        </div>
    )
}

export default about
